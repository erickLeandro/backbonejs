require 'sinatra'
require 'json'
require 'active_record'
 
# O JSON não deve conter um elemento ROOT, apenas os atributos
ActiveRecord::Base.include_root_in_json = false
 
class Post < ActiveRecord::Base
end
 
Post.establish_connection(
    :adapter => "sqlite3",
    :database => "data.db"
)
 
# Apresenta a página contendo o código HTML e Javascript
get '/' do
  File.read(File.join('public', 'index.html'))
end
 
# Endpoint GET para obter a última postagem do banco de dados
get '/posts' do
    content_type :json
    Post.last.to_json
end
 
# Endpoint POST para criar uma nova postagem
post '/posts' do
    data = JSON.parse request.body.read
 
    post = Post.new
    post.title = data['title']
    post.text = data['text']
 
    post.save
end
 
# Endpoint PUT para atualizar uma postagem existente
put '/posts/:id' do
    data = JSON.parse request.body.read
 
    post = Post.find params[:id]
    post.title = data['title']
    post.text = data['text']
 
    post.save
end
 
# Endpoint DELETE para remover uma postagem existente
delete '/posts/:id' do
    Post.destroy params[:id]
end