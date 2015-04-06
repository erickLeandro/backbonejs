var PostModel = Backbone.Model.extend({
    urlRoot: 'posts',
    defaults: {
        title: '',
        text: ''
    }
});

/* Busca o último post */

// var post = new PostModel();

// post.fetch({
//   success: function(model, response) {
//       console.log(model.get('title'));
//   },
//   error: function(model, response) {
//       console.log('Ocorreu um erro: ', response, model);
//   }
// });

/* Cria um novo post */

// var post2 = new PostModel({
//     title: 'First Post',
//     text: 'Text of the post'
// });

// post2.save();

/* Remove um post */

// var post3 = new PostModel({
//     id: 1
// });
// post3.destroy({
//     success: function(model, response) {
//         console.log('Postagem removida com sucesso');
//     },
//     error: function(model, response) {
//         window.alert('Ocorreu um erro');
//     }
// });