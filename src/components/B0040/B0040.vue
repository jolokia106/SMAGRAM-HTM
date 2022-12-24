<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';
DataTable.use(DataTablesLib);

const columns = [
    { data: '加盟店コード' },
    { data: '加盟店名' },
    { data: '都道府県' },
    { data: '代表者名' },
    { data: '事業種別' },
    { data: 'ステータス' },
    { data: '割振認定店ランク' },
    { data: 'b1' },
    { data: 'b2' },
    { data: 'b3' },
];
</script>

<template>
    <div class="row mb-5">
        <div class="col-auto">
            <input type="text" class="form-control" name="searchName" placeholder="加盟店名" value="">
        </div>
        <div class="col-auto">
            <select name="" class="form-select">
                <option value="" disabled selected style="display:none;">都道府県</option>
            </select>
        </div>
        <div class="col-auto">
            <select name="" class="form-select">
                <option value="" disabled selected style="display:none;">SG</option>
            </select>
        </div>
        <div class="col-auto">
            <select name="" class="form-select">
                <option value="" disabled selected style="display:none;">見込み</option>
            </select>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary ">検索</button>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-success ">加盟店登録</button>
        </div>
    </div>

    <div>
        <DataTable :columns="columns" ajax="/0040.json" class="table dt-responsive table-hover table-striped" width="100%">
            <thead>
                <tr>
                    <th>加盟店コード</th>
                    <th>加盟店名</th>
                    <th>都道府県</th>
                    <th>代表者名</th>
                    <th>事業種別</th>
                    <th>ステータス</th>
                    <th>割振認定店ランク</th>
                    <th>　</th>
                    <th>　</th>
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