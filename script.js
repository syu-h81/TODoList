'use strict';

var app = new Vue({
    el: '#app',
    data: {
        addText: '',
        title_class: 'title',
        todos: [
            {todo:false, text: 'パンを買う'},
            {todo:false, text: 'コーヒーを買う'}
        ]
    },
    computed: {
        remaining: function() {
            return this.todos.filter(function(val) {
                return val.done == true;
            }).length;
        }
    },
    methods: {
        addTodo: function() {
            if(this.addText) {
                this.todos.push({done:false, text: this.addText});
                this.addText = '';
            }
        },
        cleanTodo: function() {
            this.todos = this.todos.filter(function(val) {
                return val.done = false;
            })
        }
    }
})