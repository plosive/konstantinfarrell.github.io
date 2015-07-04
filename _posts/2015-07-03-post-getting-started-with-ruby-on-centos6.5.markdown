---
layout: post
title: Getting Started with Ruby on CentOS 6.5
---

To install ruby on a CentOS 6.5 box, just type this into the terminal.

    yum install ruby
    yum install rubygems
    
Update everything

    gem install rubygems-update
    update_rubygems
    
Switch to a new directory and open a ruby file

    cd ~/new_directory
    vim test.rb
    
Put this guy at the top of your file

    #!/usr/bin/env ruby
    
Now you're set. Run your project with

    ruby test.rb
    
## Handy things to know

#### Comments.

    # comments are made with #'s
    =begin
    you can also do block level comments like this
    =end
    
#### Arithmetic, Logical and Comparison operators.

math is basically the same as python

    1 + 1  # => 2 
    1 - 1  # => 0
    2 * 2  # => 4
    2 ** 3 # => 8
    8 / 2  # => 4
    
same goes for equality and inequality

    1 == 1 # => true
    2 != 5 # => true
    
and comparisons

    1 < 3 # => true
    1 > 0 # => true
    1 <= 3 # => true
    1 >= 0 # => true
    
logical operators have high precedence

    true && false # => false
    true || false # => true
    !false # => true
    
and low precedence variations. These are meant more for control of program flow.

    true and true # => true
    false or true # => true
    
    nil # ruby's keyword for a null value.
   
#### Input & Output

I/O is quite simple in Ruby. To output values to the console

    puts "Hello, World!"
    print "You can also print with print"

And to get input

    name = gets # user inputs "Bob"
    puts name   #=> Bob

## More coming soon
