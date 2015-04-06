$(function(){
  var HelloView = Backbone.View.extend({
      el: $('body'),
      initialize: function() {
          this.render();
      },
      render: function() {
          $(this.el).append("<h1>Hello World</h1>");
      }
  });
  var view = new HelloView();

  var PostView = Backbone.View.extend({
      tagName: 'article',
      className: 'page-posts',
      template: _.template("<h2><%= title %></h2><p><%= content %></p>"),
      events: {
        "dblclick" : "fullscreen",
        "click #add-button" : "newPost",
        "blur #username" : "searchUserName"
      },
      newPost: function () {
        console.log('new post');
      },
      fullscreen: function () {
        console.log('fullscreen');
      },
      searchUserName: function () {
        console.log('searching...');
      },
      render: function() {
          this.$el.html(this.template({title: "Oh my god", content: "Conteudo do Post"}));
      }
  });

  var PostModel = Backbone.Model.extend({
    idAttribute: 'timestamp'
  });

  var post = new PostModel({
    timestamp: '2014',
    title: "Primeiro post",
    text: "Conteúdo do post"
  });

  console.log(post.get('title'));
  post.set({ title: 'Oh noooo'});
  console.log(post.get('title'));
  console.log('ID: ' + post.id);
  console.log('idAttribute: ' + post.get('timestamp'));
  console.log('cid: ' + post.cid);
  
  var postView = new PostView();
  postView.render();
  $('body').append(postView.el);

});