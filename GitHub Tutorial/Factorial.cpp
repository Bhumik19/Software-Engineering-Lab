#include <iostream>
using namespace std;

int factorial(int num) {
    if (num <= 1)
        return 1;
    else
        return num * factorial(num - 1);
}

int prime(int num, int i=0) {
    if (num<=1) return 0;
    if (i==num) return 1;
    if (num%i==0) return 0;
    return prime(num, i+1);
}

int main() {
    int a;
    cout<<"Enter The Number: ";
    cin>>a;
    cout<<"The Factorial Is: " << factorial(a);
    cout<<"\n";
    if (prime(a, 2))
        cout << a << " is a prime number.";
    else
        cout << a << " is NOT a prime number.";
    return 0;
}
