<style scoped>
.formItem{
  width: 50%;
  /* background-color: #298372 */
}
</style>

<template>
    <Form :model="formItem" :label-width="100">
        <FormItem label="姓名" class="formItem">
            <Input v-model="formItem.input" placeholder="请输入你的昵称"></Input>
        </FormItem>
        <FormItem label="性别" class="formItem">
            <Select v-model="formItem.select">
                <Option value="beijing">男</Option>
                <Option value="shanghai">女</Option>
                <Option value="shenzhen">保密</Option>
            </Select>
        </FormItem>
        <FormItem label="生日" class="formItem">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择你的生日" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <!-- <Col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </Col> -->
            </Row>
        </FormItem>
        <!-- <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem> -->
        <FormItem label="请选择你感兴趣的领域" class="formItem">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="算法"></Checkbox>
                <Checkbox label="前端"></Checkbox>
                <Checkbox label="后端"></Checkbox>
                <Checkbox label="竞赛"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <!-- <FormItem label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="Slider">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem> -->
        <FormItem label="自我介绍" class="formItem">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="介绍一下你自己吧"></Input>
        </FormItem>
        <FormItem class="formItem">
            <router-link to="/DefaultSelfInfo"><Button type="primary">Submit</Button></router-link>
            <router-link to="/DefaultSelfInfo">  <Button style="margin-left: 8px">Cancel</Button></router-link>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
