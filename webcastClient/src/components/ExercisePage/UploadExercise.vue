<style scoped>
.modal-header{
    color: #2d8cf0;
    text-align: center;
}
</style>

<template>
    <div>
        <Button @click="inputModal=true">
            添加题目
        </Button>
        <Modal v-model="inputModal">
            <p slot="header" class="modal-header">
                <span>题目设置</span>
            </p>
            <div>
                <Tabs @click="chooseType">
                    <TabPane label="选择题" name="choose">
                        <Form :model="exerciseInfo">
                            <FormItem label="题目描述" :rules="{required: true, message: '题目描述不能为空', trigger: 'blur'}">
                                <Input v-model="exerciseInfo.discribe" type="textarea" placeholder="输入题目的描述"/>
                            </FormItem>
                            <FormItem label="做题时间" :rules="{required: true, message: '做题时间不能为空', trigger: 'blur'}"> 
                                <Row>
                                    <DatePicker @on-change="getDate" type="date" placeholder="Select date"></DatePicker>
                                    <TimePicker v-model="exerciseInfo.closeTime" type="time" placeholder="Select time"></TimePicker>
                                </Row>
                                <Row>
                                    {{ exerciseInfo.closeDate }} {{ exerciseInfo.closeTime }}
                                </Row>
                            </FormItem>
                            <FormItem label="正确答案" :rules="{required: true, message: '正确答案不能为空', trigger: 'blur'}">
                                <Select v-model="exerciseInfo.answer">
                                    <Option
                                        v-for="item in exerciseInfo.options"
                                        :value="item.index"
                                        :key="item.index"
                                    >
                                        {{ item.index }}
                                    </Option>
                                </Select>
                            </FormItem>
                            <FormItem
                                v-for="(item, index) in exerciseInfo.options"
                                :key="index"
                                :label="'选项'+item.index"
                                :prop="'options.'+index+'.value'"
                                :rules="{required: true, message: '选项 ' + item.index +'不能为空', trigger: 'blur'}"
                            >
                                <Row>
                                    <Col>
                                        <Input type="text" v-model="item.value" placeholder="请输入选项"/>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem>
                                <Row>
                                    <Col>
                                        <Button type="dashed" long @click="handleRemove" icon="md-remove">删除选项</Button>
                                    </Col>
                                    <Col>
                                        <Button type="dashed" long @click="handleAdd" icon="md-add">添加选项</Button>
                                    </Col>
                                </Row>
                            </FormItem>
                        </Form>
                    </TabPane>
                    <TabPane label="编程题" name="code">
                        <Form :model="exerciseInfo">
                            <FormItem label="题目描述" :rules="{required: true, message: '题目描述不能为空', trigger: 'blur'}">
                                <Input v-model="exerciseInfo.discribe" type="textarea" placeholder="输入题目的描述"/>
                            </FormItem>
                            <FormItem label="做题时间" :rules="{required: true, message: '做题时间不能为空', trigger: 'blur'}"> 
                                <Row>
                                    <DatePicker type="date" placeholder="Select date"></DatePicker>
                                    <TimePicker type="time" placeholder="Select time"></TimePicker>
                                </Row>
                            </FormItem>
                            <FormItem label="编程语言" >
                                <Select v-model="cssOptions.mode">
                                    <Option 
                                        v-for="item in codeLanguage"
                                        :value="item.value"
                                        :key="item.value"
                                    >
                                        {{ item.label }}
                                    </Option>
                                </Select>
                            </FormItem>
                            <FormItem label="现有代码">
                                <br/>
                                <codemirror v-model="exerciseInfo.code" :options="cssOptions"/>
                            </FormItem>
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        </Modal>
    </div>
</template>

<script>
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/theme/monokai.css'

export default {
    data() {
        return {
            inputModal: false,
            optionIndex: 1,
            
            exerciseInfo: {
                type: "choose",
                discribe: "",
                closeDate: new Date(),
                closeTime: new Date(),
                options: [
                    {
                        value: '',
                        index: 1,
                    }
                ],
                answer: "",
                code: "a=1"
            },

            cssOptions: {
                tabSize: 4,
                theme: 'monokai',
                mode: 'text/x-c++src',
                lineNumbers: true,
                line: true,
            },
            
            codeLanguage: [
                {
                    value: 'text/x-c++src',
                    label: 'C++'
                },
                {
                    value: 'text/x-csrc',
                    label: 'C'
                },
                {
                    value: 'text/x-java',
                    label: 'Java'
                },
                {
                    value: 'text/x-csharp',
                    label: 'C#'
                },
                {
                    value: 'text/python',
                    label: 'Python'
                },
                {
                    value: 'text/css',
                    label: 'CSS'
                },
                {
                    value: 'text/javascript',
                    label: 'JavaScript'
                },
                {
                    value: 'text/xml',
                    label: 'XML'
                },
                {
                    value: 'text/html',
                    label: 'HTML'
                },
                {
                    value: 'text/x-vue',
                    label: 'Vue'
                }
            ]
        };
    },
    
    methods: {
        chooseType(name) {
            this.exerciseInfo.type=name;
        },

        handleSubmit(name) {

        },

        handleAdd() {
            this.optionIndex++;
            this.exerciseInfo.options.push({
                value: '',
                index: this.optionIndex,
            });
            console.log(this.exerciseInfo)
        },

        handleRemove() {
            this.optionIndex--;
            this.exerciseInfo.options.splice(this.optionIndex, 1);
            console.log(this.exerciseInfo)
        },

        getDate(date) {
            this.exerciseInfo.closeDate = date;
        }
    },
}
</script>
