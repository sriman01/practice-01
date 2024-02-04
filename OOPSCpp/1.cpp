#include<bits/stdc++.h>
using namespace std;

class Student{
    private:
      int a;
      int b;
    
    public:
       Student(int a, int b){
         this->a = a;
         this->b = b;
       }
       void getter(){
          cout<<a<<" "<<b<<endl;
       }
};


int main(){
     Student A(10, 20);

     A.getter();
}