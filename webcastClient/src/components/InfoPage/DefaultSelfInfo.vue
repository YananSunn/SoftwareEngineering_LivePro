<template>
    <Row style="padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <Button v-on:click="$emit('edit_info')">编辑</Button>
            </Card>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
