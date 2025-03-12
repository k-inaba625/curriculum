var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        keywordText: '',
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText,
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
        // キーワードに該当するタスクを絞り込み
        filterLists: function () {
            var filtered = [];
            for (var i in this.list) {
                var list = this.list[i];
                var text = this.addText
                if (list.text.indexOf(this.keywordText) !== -1) {
                    filtered.push(list);
                }
            }
            return filtered;
        }
    },
    computed: {
        // 残タスク数
        remainingTask: function(){
            let remaining = this.list.filter(function(lists){
                return !lists.isChecked;
            });
            return remaining.length;
        },
        // 部分一致
        filteredLists: function () {
            return this.filterLists();
        }
    },
});