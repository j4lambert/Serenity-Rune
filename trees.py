import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sb
import datetime as dt
import plotly.express as px
st.title('SF Trees')
st.write(
    """This app analyzes trees in San Francisco using
    a dataset kindly provided by SF DPW"""
)
trees_df = pd.read_csv('trees.csv')
trees_df['age'] = (pd.to_datetime('today') -
                   pd.to_datetime(trees_df['date'])).dt.days
trees_df = pd.read_csv('trees.csv')
trees_df['age'] = (pd.to_datetime('today') -
                   pd.to_datetime(trees_df['date'])).dt.days
st.subheader('Seaborn Chart')
fig_sb, ax_sb = plt.subplots()
ax_sb = sb.histplot(trees_df['age'])
plt.xlabel('Age (Days)')
st.pyplot(fig_sb)
st.subheader('Matploblib Chart')
fig_mpl, ax_mpl = plt.subplots()
ax_mpl = plt.hist(trees_df['age'])
plt.xlabel('Age (Days)')
st.pyplot(fig_mpl)
trees_df = trees_df.dropna(subset=['longitude', 'latitude'])
trees_df = trees_df.sample(n = 1000)
st.map(trees_df)