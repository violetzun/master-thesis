source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.3'

#Nokogiri to read url
gem 'nokogiri'



#Gem to download youtubes
gem 'youtube_dl'
gem 'viddl-rb'

# Use postgresql as the database for Active Record
gem 'pg', '0.17.1'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

#Geo Location
gem 'geocoder'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'
gem 'therubyracer'
# Use unicorn as the app server
gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

gem 'rspec'
gem 'devise'
gem 'omniauth'
gem 'omniauth-facebook', '1.4.0'
gem 'fql'
gem 'newrelic_rpm'
gem "brakeman", :require => false
gem 'paperclip'
gem "paperclip-dropbox", ">= 1.1.7"
#For Facebook friend list
gem "koala", "~> 1.11.0rc"
#For delete method of Dropbox
gem "dropbox-api"

group :test do
  gem 'simplecov'
  gem 'simplecov-rcov'
  gem 'ci_reporter'
end

group :test, :development do
  gem 'minitest-rails'
end

group :production do
#  gem 'pg', (= 0.17.1)
  gem 'rails_12factor'
end


