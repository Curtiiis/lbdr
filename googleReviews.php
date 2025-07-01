<?php

$url = 'https://www.google.com/maps/preview/review/listentitiesreviews?authuser=0&hl=fr&gl=fr&pb=!1m2!1y5180792997237757647!2y17944157654643588732!2m1!2i10!3e1!4m5!3b1!4b1!5b1!6b1!7b1!5m2!1swTB4Y5ukEMq0kdUPscaWyAo!7e81';

$fileContent = file_get_contents($url);
$fileContent = str_replace(")]}'", '', $fileContent);

$reviewsJson = json_decode($fileContent, true);

/** [0, 0, 0, 0, 5] */
$stars = $reviewsJson[5];

$data = [];
$googleReviews = $reviewsJson[2];
foreach ($googleReviews as $review) {
  $createdAt = $review[1]; // 1: "il y a un an"
  $createdBy = $review[60][1] ?? ''; // 60: "Solange CAUHAPE"
  $message = $review[3]; // 3: "Société très professionnelle et personne très sympathique"
  $visitedAt = $review[36][0] ?? null; // 36: [2021, 5, 0]
  $visitedAtString = $review[45]; // 45: "Visité en mai 2021"

  $data[] = [
    'createdAt' => $createdAt,
    'createdBy' => $createdBy,
    'message' => $message,
    'visitedAt' => $visitedAt,
    'visitedAtString' => $visitedAtString
  ];
}

// save json file
file_put_contents(__DIR__ . '/reviews.json', json_encode($data));

// display json
echo json_encode($data);
