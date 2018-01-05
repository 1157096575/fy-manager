<template>
    <div class="modal fade bs-example-modal-sm" id="globalModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-sm" role="document" style="width: 300px;">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title">提示信息</h4>
                </div>
                <div class="modal-body">
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'globalModal',
        mounted: function () {
            this.$nextTick(function () {
                this.init();
            });
        },
        methods: {
            init: function () {
                
            }
        }
    }
</script>
