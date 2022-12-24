<script setup>
    import D00201 from './D0020/D00201.vue';
    import C00311 from './C0030/C00311.vue';
    import C00312 from './C0030/C00312.vue';
    import C00313 from './C0030/C00313.vue';
    import C00314 from './C0030/C00314.vue';
</script>
<template>
    <!-- <div class="container"> -->
        <div class="row">
            <div class="col-sm-4 ms-5">
                <div class="row mb-3">
                    <div class="card">
                        <div class="card-header">
                            顧客基本情報
                        </div>
                        <div class="card-body">
                            <C00311 />
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="card">
                        <div class="card-header">
                            担当BP
                        </div>
                        <div class="card-body">
                            <C00312 />
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-sm-7 ms-5">
                <div class="row mb-3">
                    <div class="card">
                        <div class="card-header">
                            クレーム履歴
                        </div>
                        <div class="card-body">
                            <C00313 />
                        </div>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="card">
                        <div class="card-header">
                            顧客過去案件履歴
                        </div>
                        <div class="card-body">
                            <D00201 />
                        </div>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="card">
                        <div class="card-header">
                            チャット履歴
                        </div>
                        <div class="card-body">
                            <C00314 />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    <!-- </div> -->
</template>