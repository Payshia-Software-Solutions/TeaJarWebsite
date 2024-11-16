<?php
$productId = $_POST['productId'];
?>

<div class="loading-popup-content">
    <div class="row">
        <div class="col-12 w-100 text-end">
            <button class="btn btn-sm btn-dark" onclick="ClosePopUP()"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h3 class="mb-0">Product Images</h3>
            <p class="border-bottom pb-2">Please fill the all required fields.</p>

            <form id="product-image-form" method="post">
                <div class="row g-2">
                    <div class="col-md-8 mb-2">
                        <h6 class="taxi-label">Logo</h6>
                        <input type="file" class="form-control" id="location_image" name="location_image">
                    </div>

                    <div class="col-md-4 mb-2">
                        <h6 class="taxi-label">Action</h6>
                        <button class="btn btn-dark w-100 form-control" type="button" name="BookPackageButton" id="BookPackageButton" onclick="SaveProductImages (<?= $productId ?>)">Save</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>