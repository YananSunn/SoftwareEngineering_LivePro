<style>

</style>

<template>
    <div>
        <Button @click="exerciseShow=true">开始做题</Button>
        <Modal v-model="exerciseShow">
            <p slot="header" style="color:#2d8cf0;text-align:center">
                <span>做题</span>
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
            <p>
                {{ exerciseList[current - 1].discribe }}
            </p>
            <br>
            <RadioGroup
                v-if="exerciseList[current-1].type=='choose'"  
                v-model="exerciseList[current-1].choose" 
                vertical
            >
                <Radio 
                    v-if="!exerciseList[current-1].finish"
                    v-for="(item, index) in exerciseList[current-1].options"
                    :key="index"
                    :label="item.index + '. ' + item.value"
                    :value="item.index"
                />
                <Radio 
                    v-if="exerciseList[current-1].finish"
                    v-for="(item, index) in exerciseList[current-1].options"
                    :key="index"
                    :label="item.index + '. ' + item.value"
                    :value="item.index"
                    disabled
                />
            </RadioGroup>
            <!-- 编程题 -->
            <div v-if="exerciseList[current-1].type=='code'">
                <codemirror v-model="exerciseList[current-1].code" :options="cssOptions"/>
            </div>
            <br>
            <Button v-if="!exerciseList[current-1].finish" @click="handOnExercise">提交本题</Button>
            <Button v-if="exerciseList[current-1].finish" disabled>提交本题</Button>
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
        }
    }
}
</script>
