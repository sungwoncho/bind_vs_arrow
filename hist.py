import csv
import sys
import pandas as pd
import matplotlib.pyplot as plt
from numpy import std, mean, abs, median

values = []
filename = sys.argv[1]


with open(filename, 'rt') as f:
    reader = csv.DictReader(f)
    for row in reader:
        values.append(int(row['time']))

m = mean(values)
d = std(values)

def reject_outliers(x):
    if abs(x - m) <= d:
        return x

values = list(filter(reject_outliers, values))

print('min', min(values))
print('max', max(values))
print('mean', mean(values))
print('std', std(values))

df  = pd.read_csv(filename)
df.plot()  # plots all columns against index
plt.show()


