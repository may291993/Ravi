import pandas as pd 
df = pd.DataFrame({'A':[1,2], 'B':[3,4]})
df.to_csv('test.csv', line_terminator='\r\n')
