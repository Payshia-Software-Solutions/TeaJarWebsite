<?php
require_once('../include/config.php');
include '../include/function-update.php';
include '../include/finance-functions.php';
include '../include/reporting-functions.php';
include '../include/lms-functions.php';

$CompanyInfo = GetCompanyInfo($link);
$Products = GetProducts($link);
$Units = GetUnit($link);

$ref_id = isset($_GET['ref_id']) && $_GET['ref_id'] !== '' ? $_GET['ref_id'] : null;

// Check if the required parameter is not set or has an empty value
if ($ref_id === null) {
    die("Invalid request. Please provide the 'ref_id' parameter with a non-empty value.");
}


$selectedArray = GetOrders()[$ref_id];
$Deliveries = GetDeliverySetting();

$delivery_id = $selectedArray['delivery_id'];
$trackingNumber = $selectedArray['tracking_number'];
$indexNumber = $selectedArray['index_number'];
$orderDate = ($selectedArray['order_date'] != null) ? date("Y-m-d H:i", strtotime($selectedArray['order_date'])) : 'Not Set';
$packed_date = ($selectedArray['packed_date'] != null) ? date("Y-m-d H:i", strtotime($selectedArray['packed_date'])) : 'Not Set';
$send_date = ($selectedArray['send_date'] != null) ? date("Y-m-d H:i", strtotime($selectedArray['send_date'])) : 'Not Set';
$current_status = $selectedArray['current_status'];
$delivery_partner = $selectedArray['delivery_partner'];
$course_code = $selectedArray['course_code'];
$estimate_delivery = $selectedArray['estimate_delivery'];
$full_name = $selectedArray['full_name'];
$street_address = $selectedArray['street_address'];
$city = $selectedArray['city'];
$district = $selectedArray['district'];
$phone_1 = $selectedArray['phone_1'];
$phone_2 = $selectedArray['phone_2'];
$is_active = $selectedArray['is_active'];
$received_date = $selectedArray['received_date'];
$package_weight =  $selectedArray['package_weight'];
$codAmount = $selectedArray['cod_amount'];

if ($current_status == 1) {
    $active_status = "Processing";
    $color = "danger";
} else if ($current_status == 2) {
    $active_status = "Packed";
    $color = "success";
} else if ($current_status == 3) {
    $active_status = "Delivered";
    $color = "dark";
}

$qrText = "https://pharmacollege.lk/track-order?trackingNumber=" . $trackingNumber;
$deliveryItem = $Deliveries[$delivery_id]['delivery_title'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shipping Label - <?= $trackingNumber ?></title>
    <link rel="stylesheet" href="../assets/css/shipping-label-1.1.css">
    <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css" />
</head>

<body>
    <div class="shipping-label p-4" style="background-image: url('../assets/images/shipping-label.jpg');">


        <div class="row" style="margin-top: 46mm; min-height:33mm; max-height:33mm;">
            <div class="col-6">
                <h4 class="company-title" style="font-size: 15px;"><?= $CompanyInfo['company_name'] ?></h4>
                <p class="mb-0">Warehouse Pelmadulla</p>
                <p class="mb-0">0715 884 884</p>
                </h4>
            </div>

            <div class="col-6">
                <h4 class="company-title"><?= $full_name ?></h4>

                <p class="mb-0"><?= $street_address ?></p>
                <p class="mb-0"><?= $city ?>, <?= $district ?></p>
                <p class="mb-0"><?= $phone_1 ?>, <?= $phone_2 ?></p>
                </h4>
            </div>


        </div>

        <div class="row" style="margin-top: 10mm;">
            <div class="col-12 text-center">
                <h3 class="tracking-title"><?= $trackingNumber ?></h3>
            </div>
        </div>


        <div class="row" style="padding-left:50mm; margin-top:6.5mm">
            <div class="col-12" style="margin-bottom: 2mm;">
                <h5 class="px-3"><?= $deliveryItem ?></h5>
            </div>

            <div class="row">
                <div class="col-12" style="margin-bottom: 2mm;">
                    <h5 class=" px-3"><?= $packed_date ?></h5>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="margin-bottom: 2mm;">
                    <h5 class=" px-3"><?= $indexNumber ?></h5>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="margin-bottom: 2mm;">
                    <h5 class=" px-3"><?= $package_weight ?> Kg</h5>
                </div>
            </div>

        </div>


        <div class="row" style="margin-top: 15mm; padding-left:5mm;">
            <div class="col-6">
                <div class="mb-3">
                    <h4 class="company-title">No Remarks</h4>
                </div>

                <div class="mb-3" style="margin-top: 15mm;padding-left:30mm">
                    <h4 class="company-title">LKR <?= number_format($codAmount, 2) ?></h4>
                </div>

            </div>

            <div class="col-6 " style="padding-left:33mm; margin-top:-7px">
                <img src="<?= generateQRCode($qrText) ?>" style="width: 20mm; ">
            </div>
        </div>
    </div>

</body>

</html>


<script>
    window.print();
</script>