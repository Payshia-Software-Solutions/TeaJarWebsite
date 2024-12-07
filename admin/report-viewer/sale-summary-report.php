<?php
require_once('../include/config.php');
include '../include/function-update.php';
include '../include/finance-functions.php';
include '../include/reporting-functions.php';

$fromQueryDate = isset($_GET['fromQueryDate']) && $_GET['fromQueryDate'] !== '' ? $_GET['fromQueryDate'] : null;
$toQueryDate = isset($_GET['toQueryDate']) && $_GET['toQueryDate'] !== '' ? $_GET['toQueryDate'] : null;
$location_id = isset($_GET['location_id']) && $_GET['location_id'] !== '' ? $_GET['location_id'] : null;

// Check if the required parameters are not set or have empty values
if ($fromQueryDate === null || $toQueryDate === null || $location_id === null) {
    die("Invalid request. Please provide all required parameters with non-empty values.");
}

// Rest of your code goes here...


$Locations = GetLocations($link);
$CompanyInfo = GetCompanyInfo($link);
$Products = GetProducts($link);
$Units = GetUnit($link);

$LocationID = $location_id;
$fromDate = new DateTime($fromQueryDate);
$formattedFromQueryDate = $fromDate->format('d/m/Y');


$toDate = new DateTime($toQueryDate);
$formattedToQueryDate = $toDate->format('d/m/Y');

$generateDAte = new DateTime();
$reportDate = $generateDAte->format('d/m/Y H:i:s');
$LocationName = $Locations[$LocationID]['location_name'];

$pageTitle = "Sale Summary Report - " . $fromQueryDate . " - " . $toQueryDate;
$reportTitle = "Sale Summary Report";

$subTotal = $discountAmount = $serviceCharge = $grandTotal  = $returnTotal = 0;

$invoiceSales = getInvoicesByDateRangeAll($link, $fromQueryDate, $toQueryDate, $location_id);
$location_name = $Locations[$location_id]['location_name'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?></title>

    <!-- Favicons -->
    <link href="../assets/images/favicon/apple-touch-icon.png" rel="icon">
    <link href="../assets/images/favicon/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/report-viewer.css">

</head>

<body>
    <div class="invoice">
        <div id="container">
            <div id="left-section">
                <h3 class="company-title"><?= $CompanyInfo['company_name'] ?></h3>
                <p><?= $CompanyInfo['company_address'] ?>, <?= $CompanyInfo['company_address2'] ?></p>
                <p><?= $CompanyInfo['company_city'] ?>, <?= $CompanyInfo['company_postalcode'] ?></p>
                <p>Tel: <?= $CompanyInfo['company_telephone'] ?>/ <?= $CompanyInfo['company_telephone2'] ?></p>
                <p>Email: <?= $CompanyInfo['company_email'] ?></p>
                <p>Web: <?= $CompanyInfo['website'] ?></p>
            </div>

            <div id="right-section">
                <h4 class="report-title-mini"><?= strtoupper($reportTitle) ?></h4>
                <table>
                    <tr>
                        <th>From Date</th>
                        <td class="text-end"><?= $formattedFromQueryDate ?></td>
                    </tr>
                    <tr>
                        <th>To Date</th>
                        <td class="text-end"><?= $formattedToQueryDate ?></td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td class="text-end"><?= $location_name ?></td>
                    </tr>
                </table>
            </div>

        </div>



        <p style="font-weight:600;margin-top:10px; margin-bottom:0px">Report is generated on <?= $reportDate ?></p>
        <div id="container" class="section-4">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Invoice #</th>
                        <th scope="col">Customer</th>
                        <!-- <th scope="col">Ref #</th> -->
                        <th scope="col">Sub Total</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Charge</th>
                        <th scope="col">Return</th>
                        <th scope="col">Grand Total</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (!empty($invoiceSales)) {
                        foreach ($invoiceSales as $selectedArray) {
                            $referenceText = "";

                            $returnSettlement =  GetInvoiceSettlement($selectedArray['invoice_number']);

                            $invoice_date = date("Y-m-d H:i", strtotime($selectedArray['current_time']));
                            $invoice_date = date("Y-m-d", strtotime($selectedArray['current_time']));
                            $subTotal += $selectedArray['inv_amount'];
                            $ref_hold = $selectedArray['ref_hold'];
                            $discountAmount += $selectedArray['discount_amount'];
                            $serviceCharge += $selectedArray['service_charge'];

                            $returnTotal += $returnSettlement;
                            $grandTotal += ($selectedArray['grand_total'] - $returnSettlement);

                            $CustomerID = $selectedArray['customer_code'];
                            $Customer = GetCustomersByID($link, $CustomerID);

                            if ($ref_hold == '0') {
                                // $referenceText = "Take Away";
                                $referenceText = "Direct";
                            } else if ($ref_hold == '-1') {
                                // $referenceText = "Retail";
                                $referenceText = "Direct";
                            } else if ($ref_hold == '-2') {
                                // $referenceText = "Delivery";
                                $referenceText = "Direct";
                            } else if ($ref_hold == "") {
                                // $referenceText = "None";
                                $referenceText = "Direct";
                            } else {
                                $referenceText = $ref_hold;
                            }
                    ?>
                            <tr>
                                <td><?= $invoice_date ?></td>
                                <td><?= $selectedArray['invoice_number'] ?></td>
                                <td><?= $Customer['customer_first_name'] ?> <?= $Customer['customer_last_name'] ?></td>
                                <!-- <td><?= $referenceText ?></td> -->
                                <td class="text-end"><?= formatAccountBalance($selectedArray['inv_amount']) ?></td>
                                <td class="text-end"><?= formatAccountBalance($selectedArray['discount_amount']) ?></td>
                                <td class="text-end"><?= formatAccountBalance($selectedArray['service_charge']) ?></td>
                                <td class="text-end"><?= formatAccountBalance($returnSettlement) ?></td>
                                <td class="text-end"><?= formatAccountBalance($selectedArray['grand_total'] - $returnSettlement) ?></td>
                            </tr>

                    <?php
                        }
                    }
                    ?>
                    <tr>
                        <td scope="col" class="text-end border-bottom text-bold-extra" colspan="4"><?= formatAccountBalance($subTotal) ?></td>
                        <td scope="col" class="text-end border-bottom text-bold-extra"><?= formatAccountBalance($discountAmount) ?></td>
                        <td scope="col" class="text-end border-bottom text-bold-extra"><?= formatAccountBalance($serviceCharge) ?></td>
                        <td scope="col" class="text-end border-bottom text-bold-extra"><?= formatAccountBalance($returnTotal) ?></td>
                        <td scope="col" class="text-end border-bottom text-bold-extra"><?= formatAccountBalance($grandTotal) ?></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <script>
            window.print();

            // // Close the window after printing
            // window.onafterprint = function() {
            //     window.close();
            // };
        </script>
    </div>

</body>

</html>