# How to setup a basic Ruby webapp

## Set up a repository as a git repo and initialise git

`git init`
`rspec --init`

## Create the Gemfile

```
source 'https://rubygems.org'

ruby '2.5.0'

gem 'sinatra'
gem 'sinatra-flash'

group :test do
  gem 'capybara'
  gem 'launchy'
  gem 'rspec'
  gem 'rubocop', '0.56.0'
  gem 'simplecov', require: false
  gem 'simplecov-console', require: false
end
```

run `bundle install` to install the gems

## Add the skeleton files

1. Add an app.rb

```
require 'sinatra/base'

class AppName < Sinatra::Base

  get '/' do
    return "Hello world"
  end

end
```

2. To use rackup to run the app, add a config.ru file

```
require './app.rb'

run AppName
```
3. Add a lib folder for the model classes

4. Add a views folder for the erb files



## Setting up the CSS

1. Add a layout.erb file that points to the CSS files

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>AppName</title>
  <link rel="stylesheet" href="/style.css">
</head>

<body>
  <%= yield %>
</body>

</html>
```

2. Add a public folder and add the CSS file there

## Setting up for testing

In your spec helper you will need:

```
require 'simplecov'
require 'simplecov-console'

SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter.new([
  SimpleCov::Formatter::Console,
  # Want a nice code coverage website? Uncomment this next line!
  # SimpleCov::Formatter::HTMLFormatter
])
SimpleCov.start
```

This allows you to get test coverage stats when you run rspec.


Add this to your spec helper:

```
require 'capybara'
require 'rspec'
require 'capybara/rspec'

require './app.rb'
```
