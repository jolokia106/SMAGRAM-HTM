<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';
DataTable.use(DataTablesLib);

const columns = [
    { data: 'ユーザID' },
    { data: 'ユーザ名' },
    { data: 'email' },
    { data: '権限' },
    { data: '部署' },
    { data: '所属' },
    { data: 'テスト' },
];
</script>

<template>
    <div class="row mb-5">
        <div class="col-auto">
            <input type="text" class="form-control" name="searchName" placeholder="ユーザ名" value="">
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" name="SearchPhone" placeholder="email" value="">
        </div>
        <!-- <div class="col-auto">
            <input type="text" class="form-control" name="" placeholder="担当BP" value="">
        </div>
        <div class="col-auto">
            <select name="" class="form-select">
                <option value="" disabled selected style="display:none;">都道府県</option>
            </select>
        </div>
        <div class="col-auto">
            <select name="" class="form-select">
                <option value="" disabled selected style="display:none;">送客元</option>
            </select>
        </div> -->
        <div class="col-auto">
            <button type="submit" class="btn btn-primary ">検索</button>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-success ">ユーザ登録</button>
        </div>
    </div>

    <div>
        <DataTable :columns="columns" ajax="/0010.json" class="table dt-responsive table-hover table-striped" width="100%">
            <thead>
                <tr>
                    <th>ユーザID</th>
                    <th>ユーザ名</th>
                    <th>email</th>
                    <th>権限</th>
                    <th>部署</th>
                    <th>所属</th>
                    <th>　</th>
                </tr>
            </thead>
            <tfoot>
            </tfoot>
        </DataTable>
    </div>
</template>

<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>