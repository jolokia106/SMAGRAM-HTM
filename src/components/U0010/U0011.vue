<template>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>ユーザID:</label>
        </div>
        <div class="col-auto">
            232
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>ユーザ名:</label>
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="フルネーム ..." value="">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>email:</label>
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="email ..." value="">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>権限:</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">システム管理者</option>
                <option value="2">GMユーザ</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>加盟店コード:</label>
        </div>
        <div class="col-auto">
            <select class="form-select" id="basic-usage" data-placeholder="Choose one thing">
                <option></option>
                <option>2:愛知名古屋店</option>
                <option>4:愛知大治店</option>
                <option>6:宮城仙台店</option>
            </select>   
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>部署:</label>
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="部署 ..." value="">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-2 col-form-label">
            <label>所属:</label>
        </div>
        <div class="col-sm-4">
            <input type="text" class="form-control" placeholder="所属 ..." value="">
        </div>
    </div>

</template>