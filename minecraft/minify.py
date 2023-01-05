import os
import glob
from PIL import Image
    
def thumbnail_pic(path):
    a=glob.glob(r'about/stamp.png')
    print(a)
    for x in a:
        name=os.path.join(path,x)
        im=Image.open(name)
        im.thumbnail((400,400))
        print(im.format,im.size,im.mode)
        im.save('about/'+name.split('/')[2])
        print('done!')
    
if __name__=='__main__':
    path='.'
    thumbnail_pic(path)