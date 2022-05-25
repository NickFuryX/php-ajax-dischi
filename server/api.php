<?php

//Import del datbese dei dischi
    include __DIR__ . 'db.php';

    
    header('Content-Type: application/json');

    echo json_encode($cards);
    var_dump($cards); 
?>