<style>

</style>

<template>
    <div>
        <Button @click="exerciseShow=true">编辑题目</Button>
        <Modal v-model="exerciseShow">
            <p slot="header" style="color:#2d8cf0;text-align:center">
                <span>编辑题目</span>
            </p>
            <Slider 
                v-model="current" 
                :step="1" 
                :max="exerciseNumber"
                :min="1" 
                show-stops
            />
            <br>
            <Button @click="exerciseBefore">上一题</Button>
            <Button @click="exerciseAfter">下一题</Button>
            <br>
            <Form :model="exerciseList[current-1]" v-if="exerciseList[current-1].type=='choose'">
                <FormItem label="题目描述" :rules="{required: true, message: '题目描述不能为空', trigger: 'blur'}">
                    <Input v-model="exerciseList[current-1].discribe" type="textarea" placeholder="输入题目的描述"/>
                </FormItem>
                <FormItem label="正确答案" :rules="{required: true, message: '正确答案不能为空', trigger: 'blur'}">
                    <Select v-model="exerciseList[current-1].answer">
                        <Option
                            v-for="item in exerciseList[current-1].options"
                            :value="item.index"
                            :key="item.index"
                        >
                            {{ item.index }}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem
                    v-for="(item, index) in exerciseList[current-1].options"
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
                            <Button type="dashed" long @click="handleRemoveOption" icon="md-remove">删除选项</Button>
                        </Col>
                        <Col>
                            <Button type="dashed" long @click="handleAddOption" icon="md-add">添加选项</Button>
                        </Col>
                    </Row>
                </FormItem>
            </Form>
            <br>
            <!-- 编程题 -->
            <Form :model="exerciseList[current-1]" v-if="exerciseList[current-1].type=='code'">
                <FormItem label="题目描述" :rules="{required: true, message: '题目描述不能为空', trigger: 'blur'}">
                    <Input v-model="exerciseList[current-1].discribe" type="textarea" placeholder="输入题目的描述"/>
                </FormItem>
                <codemirror v-model="exerciseList[current-1].code" :options="cssOptions"/>
            </Form>
            <br>
            <div slot="footer">
                <Row>
                    <Button long @click="handleUpdateExercise">修改本题</Button>
                </Row>
                <Row>
                    <Button long @click="handleRemoveExercise">删除本题</Button>
                </Row>
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
            exerciseShow: false,

            current: 1,
            exerciseNumber: 5,

            choice: 0,

            cssOptions: {
                tabSize: 4,
                theme: 'monokai',
                mode: 'text/x-c++src',
                lineNumbers: true,
                line: true,
                readOnly: false,
            },

            exerciseList: [
                {
                    id: "001",
                    type: "choose",
                    discribe: "1 + 1 = ?",
                    options: [
                        {
                            value: '2',
                            index: 1,
                        },
                        {
                            value: '3',
                            index: 2,
                        },
                        {
                            value: '4',
                            index: 3,
                        },
                        {
                            value: '5',
                            index: 4,
                        },
                    ],
                    answer: 1,
                    choose: 0,
                    codingLanguage: "",
                    code: "",
                    codeFinish: "",
                    finish: false
                },
                {
                    id: "002",
                    type: "choose",
                    discribe: "1 + 2 = ?",
                    options: [
                        {
                            value: '2',
                            index: 1,
                        },
                        {
                            value: '3',
                            index: 2,
                        },
                        {
                            value: '4',
                            index: 3,
                        },
                        {
                            value: '5',
                            index: 4,
                        },
                    ],
                    answer: 2,
                    choose: 0,
                    codingLanguage: "",
                    code: "",
                    codeFinish: "",
                    finish: false
                },
                {
                    id: "003",
                    type: "choose",
                    discribe: "1 + 3 = ?",
                    options: [
                        {
                            value: '2',
                            index: 1,
                        },
                        {
                            value: '3',
                            index: 2,
                        },
                        {
                            value: '4',
                            index: 3,
                        },
                        {
                            value: '5',
                            index: 4,
                        },
                    ],
                    answer: 3,
                    choose: 0,
                    codingLanguage: "",
                    code: "",
                    codeFinish: "",
                    finish: false
                },
                {
                    id: "004",
                    type: "code",
                    discribe: "Finish the code",
                    options: [
                    ],
                    answer: 0,
                    choose: 0,
                    codingLanguage: "text/x-c++src",
                    code: "const int",
                    codeFinish: "",
                    finish: false
                },
                {
                    id: "005",
                    type: "code",
                    discribe: "Finish the code",
                    options: [
                    ],
                    answer: 0,
                    choose: 0,
                    codingLanguage: "text/x-c++src",
                    code: "const int",
                    codeFinish: "",
                    finish: false
                }
            ]
        }
    },

    methods: {
        handOnExercise() {
            // 与后端通信
            this.exerciseList[this.current - 1].finish = true;
            if(this.exerciseList[this.current - 1].type == "code") {
                    this.cssOptions.readOnly = this.exerciseList[this.current - 1].finish;
            }
            if(this.current == this.exerciseNumber) {
                this.$Message.info("已经是最后的题目了");
            } else {
                this.current++;
                if(this.exerciseList[this.current - 1].type == "code") {
                    this.cssOptions.readOnly = this.exerciseList[this.current - 1].finish;
                }
            }
        },

        exerciseBefore() {
            if(this.current == 1) {
                this.$Message.info("已经是第一个题目了");
            } else {
                this.current--;
                if(this.exerciseList[this.current - 1].type == "code") {
                    this.cssOptions.readOnly = this.exerciseList[this.current - 1].finish;
                }
            }
        },

        exerciseAfter() {
            if(this.current == this.exerciseNumber) {
                this.$Message.info("已经是最后的题目了");
            } else {
                this.current++;
                if(this.exerciseList[this.current - 1].type == "code") {
                    this.cssOptions.readOnly = this.exerciseList[this.current - 1].finish;
                }
            }
        },

        handleRemoveOption() {
            this.exerciseList[this.current-1].options.splice(
                this.exerciseList[this.current-1].options.length-1,
                1
            );
        },

        handleAddOption() {
            this.exerciseList[this.current-1].options.push({
                value: '',
                index: this.exerciseList[this.current-1].options.length + 1
            })
        },

        handleUpdateExercise() {
            // send to the server
            console.log(this.exerciseList);
        },

        handleRemoveExercise() {
            // send to the server
            this.exerciseList.splice(
                this.current - 1, 1
            );
            this.exerciseNumber=this.exerciseList.length;
            console.log(this.exerciseList);
        }

        
    }
}
</script>
