import spacy
import string
from heapq import nlargest

loader=spacy.load('en_core_web_sm')
data=input("DATA:  ")
token_obj=loader(data)
punctuation=string.punctuation + '\n'

word_token=list()
#word token for finding frequency later:
word_token_unpunctuated=[x.lower_ for x in token_obj if not x.is_stop]
for x in word_token_unpunctuated:
    if x not in list(punctuation):
        word_token.append(x)

#calculating frequency:
word_freq={}
for x in word_token:
    if x not in word_freq.keys():
        word_freq[x]=1
    else:
        word_freq[x]+=1

max_freq_token=max(word_freq.values())

#total freqency of each sentence based on the most occuring words
sent_freq={}
for sent in token_obj.sents:
    for x in sent:
        if x.lower_ in word_freq.keys():
            if sent not in sent_freq.keys():
                sent_freq[sent]=word_freq[x.lower_]
            else:
                sent_freq[sent]+=word_freq[x.lower_]

summary_list=nlargest(n=round(len(sent_freq)/3), iterable=sent_freq, key=sent_freq.get)

#summary time:
summary=""
for x in summary_list:
    summary=summary+str(x)
print("SUMMARY:  ",summary)
