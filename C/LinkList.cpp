#include <stdio.h>
#include <stdlib.h>

struct n{
    int val;
    n* next;  
};

typedef n node;

void addToLinkList(node* root,int value)
{
    // if root is not defined. 
    if(root == NULL)
    {
        root = (node*)malloc(sizeof(node*));
        root->next = NULL;
    }
    // iter variable 
    node*iter = root;
    // Loop until get the last node in link list. 
    while(iter->next != NULL)
        iter = iter->next;
    
    // new node
    iter->next = (node*) malloc(sizeof(node));
    iter->next->val = value;
    // and NULL parameter after the new last node.
    iter->next->next=NULL;
}

void printAllList(node* root)
{
    node* i = root;
    while(i != NULL)
    {
       printf("%d\n ",i->val);
       i=i->next;
    }
}

// Will add a node to a specific index/order on the list.
void addListToIndex(node* root,int index,int value)
{
    node* itter = root;
    for(int i = 0;i<index;i++)
        itter = itter->next;
    
    node* temp = (node*)malloc(sizeof(node));
    temp->next = itter->next;
    itter->next = temp;
    temp->val = value;
}

int main()
{
    node* root = (node*) malloc(sizeof(node));
    root->next = NULL;

    for(int i=1;i<10;i++)
    {
        addToLinkList(root,i*rand()%50); 
    }

    printAllList(root);

    return 0;
}