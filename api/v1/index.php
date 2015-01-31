<?php
date_default_timezone_set("UTC");

require_once 'dbHandler.php';
require_once 'dbHelper.php';
require_once 'passwordHash.php';
require '.././libs/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app = \Slim\Slim::getInstance();
$db = new dbHelper();
// User id from db - Global Variable
$user_id = NULL;

require_once 'authentication.php';

/**
 * Verifying required params posted or not
 */
function verifyRequiredParams($required_fields,$request_params) {
    $error = false;
    $error_fields = "";
    foreach ($required_fields as $field) {
        if (!isset($request_params->$field) || strlen(trim($request_params->$field)) <= 0) {
            $error = true;
            $error_fields .= $field . ', ';
        }
    }

    if ($error) {
        // Required field(s) are missing or empty
        // echo error json and stop the app
        $response = array();
        $app = \Slim\Slim::getInstance();
        $response["status"] = "error";
        $response["message"] = 'Required field(s) ' . substr($error_fields, 0, -2) . ' is missing or empty';
        echoResponse(200, $response);
        $app->stop();
    }
}
    $app->get('/customers', function() {
        global $db;
        $rows = $db->select("customers","customer_id,first_name,last_name,email,primary_phone",array());
        echoResponse(200, $rows);
    });

    $app->get('/customer/:id', function($id) {
        global $db;
        $rows = $db->select("customers","*" ,array('customer_id'=>$id));
        $customer = array();
        $customer['customer'] = $rows;
        $rows_pets = $db->select("pets","*" ,array('customer_id'=>$id));
        $customer['customerpets'] = $rows_pets;
        echoResponse(200, $customer);
    });

/* DOG PRICE */

    $app->get('/dogpricefactors', function() use ($app) {
        global $db;
        $rows = $db->select("dog_price_factor","id,label,price",array());
        echoResponse(200, $rows);
    });

    $app->put('/dogpricefactors/:id', function($id) use ($app) {
        $data = json_decode($app->request->getBody());
        $condition = array('id'=>$id);
        $mandatory = array();
        global $db;
        $rows = $db->update("dog_price_factor", $data, $condition, $mandatory);
        if($rows["status"]=="success")
            $rows["message"] = "Product information updated successfully.";
        echoResponse(200, $rows);
    });

    $app->delete('/dogpricefactors/:id', function($id) {
        global $db;
        $rows = $db->delete("dog_price_factor", array('id'=>$id));
        if($rows["status"]=="success")
            $rows["message"] = "Product removed successfully.";
        echoResponse(200, $rows);
    });
    $app->post('/dogpricefactors', function() use ($app) {
        $data = json_decode($app->request->getBody());
        $data->created_at = date('Y-m-d H:i:s');
        print_r($data);
        $mandatory = array('label');
        global $db;
        $rows = $db->insert("dog_price_factor", $data, $mandatory);
        if($rows["status"]=="success")
            $rows["message"] = "Dog Price Factor added successfully.";
        echoResponse(200, $rows);
    });

/* CAT PRICE */
$app->get('/catpricefactors', function() use ($app) {
    global $db;
    $rows = $db->select("cat_price_factor","id,label,price",array());
    echoResponse(200, $rows);
});

$app->put('/catpricefactors/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("cat_price_factor", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/catpricefactors/:id', function($id) {
    global $db;
    $rows = $db->delete("cat_price_factor", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});
$app->post('/catpricefactors', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("cat_price_factor", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Cat Price Factor added successfully.";
    echoResponse(200, $rows);

});

/* Dog Breeds */
$app->get('/dogbreed', function() use ($app) {
    global $db;
    $rows = $db->select("dog_breeds","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/dogbreed/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("dog_breeds", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/dogbreed/:id', function($id) {
    global $db;
    $rows = $db->delete("dog_breeds", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/dogbreed', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("dog_breeds", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Dog breed added successfully.";
    echoResponse(200, $rows);

});

/* Cat Breeds */
$app->get('/catbreed', function() use ($app) {
    global $db;
    $rows = $db->select("cat_breeds","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/catbreed/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("cat_breeds", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/catbreed/:id', function($id) {
    global $db;
    $rows = $db->delete("cat_breeds", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/catbreed', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("cat_breeds", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "cat breed added successfully.";
    echoResponse(200, $rows);

});

/* Health Questions */
$app->get('/healthquestions', function() use ($app) {
    global $db;
    $rows = $db->select("health_questions","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/healthquestions/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("health_questions", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/healthquestions/:id', function($id) {
    global $db;
    $rows = $db->delete("health_questions", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/healthquestions', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("health_questions", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Health questions added successfully.";
    echoResponse(200, $rows);

});

/* Cat Questions */
$app->get('/catquestions', function() use ($app) {
    global $db;
    $rows = $db->select("cat_questions","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/catquestions/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("cat_questions", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/catquestions/:id', function($id) {
    global $db;
    $rows = $db->delete("cat_questions", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/catquestions', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("cat_questions", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Health questions added successfully.";
    echoResponse(200, $rows);

});

/* illness Questions */
$app->get('/illnessquestions', function() use ($app) {
    global $db;
    $rows = $db->select("illness_questions","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/illnessquestions/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("illness_questions", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/illnessquestions/:id', function($id) {
    global $db;
    $rows = $db->delete("illness_questions", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/illnessquestions', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("illness_questions", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Health questions added successfully.";
    echoResponse(200, $rows);

});

/* Health Questions */
$app->get('/catquestions', function() use ($app) {
    global $db;
    $rows = $db->select("cat_questions","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/catquestions/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("cat_questions", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/catquestions/:id', function($id) {
    global $db;
    $rows = $db->delete("cat_questions", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/catquestions', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("cat_questions", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Health questions added successfully.";
    echoResponse(200, $rows);

});

/* General Questions */
$app->get('/generalquestions', function() use ($app) {
    global $db;
    $rows = $db->select("general_questions","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/generalquestions/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("general_questions", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/generalquestions/:id', function($id) {
    global $db;
    $rows = $db->delete("general_questions", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/generalquestions', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("general_questions", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "General questions added successfully.";
    echoResponse(200, $rows);

});

/* Messages */
$app->get('/messages', function() use ($app) {
    global $db;
    $rows = $db->select("messages","id,label,value",array());
    echoResponse(200, $rows);
});

$app->put('/messages/:id', function($id) use ($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("messages", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Item information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/messages/:id', function($id) {
    global $db;
    $rows = $db->delete("messages", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Item removed successfully.";
    echoResponse(200, $rows);
});

$app->post('/messages', function() use ($app) {
    $data = json_decode($app->request->getBody());
    $data->created_at = date('Y-m-d H:i:s');
    print_r($data);
    $mandatory = array('label');
    global $db;
    $rows = $db->insert("messages", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "General questions added successfully.";
    echoResponse(200, $rows);

});
/* comment */

function echoResponse($status_code, $response) {
    $app = \Slim\Slim::getInstance();
    // Http response code
    $app->status($status_code);

    // setting response content type to json
    $app->contentType('application/json');

    echo json_encode($response);
}

$app->run();
?>