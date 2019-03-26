<?php

/**
 * verifyItems: Will verify prices for items
 * and count the number of discrepencies
 */
function verifyItems($origItems, $origPrices, $items, $prices) {
	$origItemsMap = [];
	foreach ($origItems as $key => $value) {
		$origItemsMap[$value] = $origPrices[$key];
	}
	$mistake = 0;
	foreach ($items as $key => $value) {
		if(!array_key_exists($value, $origItemsMap)) {
			continue;
		}
		if($origItemsMap[$value] !== $prices[$key]) {
			$mistake++;
		}
	}
	return $mistake;
}

echo PHP_EOL . "---------Sample 1--------". PHP_EOL;
// Sample 1
$origItems = ["rice", "sugar", "wheat", "cheese"];
$origPrices = [16.89, 56.92, 20.89, 345.99];
$items = ["rice", "cheese"];
$prices = [18.99, 400.89];

echo verifyItems($origItems, $origPrices, $items, $prices);


echo PHP_EOL . "---------Sample 2--------". PHP_EOL;
// Sample 2
$origItems = ["chocolate", "cheese", "tomato"];
$origPrices = [15.00, 300.90, 23.44];
$items = ["chocolate", "cheese", "tomato"];
$prices = [15.00, 300.90, 10.00];

echo verifyItems($origItems, $origPrices, $items, $prices);

echo PHP_EOL . "------------END----------";
exit(0);

?>
