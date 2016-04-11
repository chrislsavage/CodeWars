def digital_root(num)
 split_num = num.to_s.split("")
 reduced_num = split_num.reduce(0) { |sum, x| sum + x.to_i }

 if reduced_num < 10
   return reduced_num
 else
   digital_root(reduced_num)
 end

end
