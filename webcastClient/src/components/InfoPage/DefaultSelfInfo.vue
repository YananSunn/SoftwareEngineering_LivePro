<template>
    <Row style="padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <router-link to="/EditSelfInfo"><Button>编辑</Button></router-link>
            </Card>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
