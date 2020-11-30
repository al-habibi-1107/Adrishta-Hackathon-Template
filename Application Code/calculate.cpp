//
#include<iostream>
#include<fstream>
#include<string>
using namespace std;

class candidate{
	string name;
	int votes;
	public:
		candidate(){}
		candidate(string s, int v): name(s), votes(v){}
		candidate(string s): name(s), votes(0){}
};

void calculate(){
	
}

int main(){
	char filename[30], candidate_name[30];
	int i, can_no;
	
	fstream file;
	cout<< "Polling file name: ";
	cin.getline(filename, 30);
	file.open(filename);
	
	cout<< "Number of candidates ";
	cin>> can_no;
	candidate list[can_no];
	cout<< "Names"<< endl;
	for(i=0; i<can_no; i++){
		cin.getline(candidate_name, 30);
		list[i]= candidate(candidate_name);
	}
	
	
	return 0;
}
