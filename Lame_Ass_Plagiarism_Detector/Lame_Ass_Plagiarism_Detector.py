import math

#Vocab:

word1=input("Give your first sentence:  ")
word2=input("\nGive your second sentence:  ")
word1_split=word1.split(" ")
word2_split=word2.split(" ")
word1_unique=sorted(list(set(word1_split)))
word2_unique=sorted(list(set(word2_split)))
vocab_mixed=word1_split+word2_split
vocab=sorted(list(set(vocab_mixed)))


#Matrixifying:

word1_vocab=[]
word2_vocab=[]
for i in range(0,len(vocab)):
    for j in range(0,len(word1_unique)):
        if vocab[i]==word1_unique[j]:
            word1_vocab.append(1)
            break
        if j==len(word1_unique)-1:
            word1_vocab.append(0)
    for k in range(0,len(word2_unique)):
        if vocab[i]==word2_unique[k]:
            word2_vocab.append(1)
            break
        if k==len(word2_unique)-1:
            word2_vocab.append(0)


#Vectorizing:

sum_squ_1=sum_squ_2=dot_product=0
for i in range(0,len(word1_vocab)):
    product=word1_vocab[i]*word2_vocab[i]
    dot_product=dot_product+product
    sum_squ_1=sum_squ_1+(word1_vocab[i]**2)
    sum_squ_2=sum_squ_2+(word2_vocab[i]**2)
cosine_dependency=dot_product/(math.sqrt(sum_squ_1)*math.sqrt(sum_squ_2))


#Result:

if cosine_dependency>0.9:
    print('\n\nClearly Plagiarized!!')
elif cosine_dependency>0.7:
    print('\n\nPlagiarized enough to find out!')
elif cosine_dependency>0.5:
    print('\n\nOK.')
else:
    print('\n\nCan\'t no body get this similar...')
