<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';
DataTable.use(DataTablesLib);

const columns = [
    { data: '顧客コード' },
    { data: '氏名' },
    { data: '都道府県' },
    { data: '担当BP' },
    { data: '電話番号' },
    { data: '送客元' },
    { data: 'b1' },
];
</script>

<template>
    <div class="row mb-5">
        <div class="col-auto">
            <input type="text" class="form-control" name="searchName" placeholder="氏名" value="">
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" name="SearchPhone" placeholder="電話番号" value="">
        </div>
        <div class="col-auto">
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
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary ">検索</button>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-success ">顧客登録</button>
        </div>
    </div>

    <div>
        <DataTable :columns="columns" ajax="/data.json" class="table dt-responsive table-hover table-striped" width="100%">
            <thead>
                <tr>
                    <th>顧客コード</th>
                    <th>氏名</th>
                    <th>都道府県</th>
                    <th>担当BP</th>
                    <th>電話番号</th>
                    <th>送客元</th>
                    <th></th>
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