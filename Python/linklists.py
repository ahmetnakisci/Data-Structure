class Element(object): 
    def __init__(self,value):
        self.value = value
        self.next = None

    def get_value(self):
        return self.value
    
    def set_value(self,new_value):
        self.value = new_value

    def set_next(self,next):
        self.next = next

    def get_next(self):
        return self.next


class LinkList(object): 
    def __init__(self,head=None):
        self.head = head
    
    # Print all list values 
    def show(self):
        current = self.head
        if self.head: 
            # itterate throught end of list
            while current:
                print(current.get_value())
                current = current.next
    
    # function that add element to the list
    def append(self,new_element):
        #get the head of the list into current var
        current = self.head
        #if head is exist
        if self.head:
            #iterrate through the end of the link list while next element is exist
            while current.get_next():
                current = current.get_next()
            #now current is the last element of the link list now add new_element to the end of link list
            current.set_next(new_element)
        else: 
            self.head = new_element
    
    def remove(self,value):
        """Delete the first node with a given value."""

        current = self.head
        # to store previous node in order to linked the next node
        previous = None

        if self.head:
            # while next list is exists
            while current.get_next():
                # if the value that we want to remove is equal to current pointer value 
                if current.get_value() == value:
                    #if previous node is exist 
                    if previous: 
                        # Set previous node next to current pointer
                        # Element deleted by pointing the next element
                        previous.set_next(current.get_next())
                    # if previous element is not exist we should remove the head element
                    else:
                        # Head element deleted by pointing the next element of the head element
                        self.head = current.get_next()
                    return True
                # if value is not equal
                else:
                    # set previous to this  
                    previous = current
                    # set this to next
                    current = current.get_next()
        return False

    def get_position(self, position):
        """Get an element from a particular position.
        Assume the first position is "1".
        Return "None" if position is not in the list."""
        current = self.head
        current_position = 1
        while current:
            if current_position == position:
                return current
            else:
                current_position+=1
                current = current.next
        
        return None

    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        current = self.head
        prev = None
        current_position = 1
        
        while current:
            if current_position == position:
                if prev:
                    prev.set_next(new_element)
                    new_element.set_next(current)
                else:
                    self.head = new_element
                    new_element.set_next(current)
                    
                break
            else:
                current_position+=1
                prev = current
                current = current.get_next()
        pass

    def find(self,value):
        current = self.head

        if self.head:
            while current.get_next():
                if current.get_value() == value : 
                    return current
                
                current = current.get_next()

    def length(self):
        size = 0
        current = self.head

        while current.get_next(): 
            current = current.get_next()
            size +=1

        return size



### Test Cases ### 

list = LinkList()

for x in range(1,11):
    new_element = Element(x)
    list.append(new_element)
    

list.show()