FROM ruby:2.7

# Install dependencies
RUN apt-get update && apt-get install -y build-essential

# Set the working directory
WORKDIR /app

# Copy the Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install bundler and the Ruby gems
RUN gem install bundler && bundle install

# Copy the rest of the application code
COPY . .

# Expose the default port for the application
EXPOSE 4000

# Set the command to run the application
CMD ["jekyll", "serve", "-H", "0.0.0.0", "-P", "4000"]

