page "CNAME", layout: false

configure :development do
  activate :livereload
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true
end

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 10']
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  set :relative_links, true
end

helpers do
  def google_spreadsheet_url
    "https://script.google.com/macros/s/AKfycbyiCdi65f765qKOzWQgupf_konDgAEg2sjTyRorDebY8tIjIxM/exec"
  end
end
