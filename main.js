const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(todoList.print(i));
    }
  },

  add: function (text) {
    this.items.unshift({ text: text, completed: false });
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    if (!this.items[index].completed) {
      return `[ ] ${this.items[index].text}`;
    } else {
      return `[x] ${this.items[index].text}`;
    }
  },

  complete: function (index) {
    this.items[index].completed = true;
  },
};