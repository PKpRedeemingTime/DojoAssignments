import java.util.*;

public class SinglyLinkedList {
	public Node head;
	public SinglyLinkedList() {
		this.head = null;
	}
	public void add(int value) {
		Node newNode = new Node(value);
		if(head == null) {
			head = newNode;
		}
		else {
			Node current = head;
			while(current.next != null) {
				current = current.next;
			}
			current.next = newNode;
		}
	}
	public void remove() {
		Node current = head;
		while(current.next.next != null) {
			current = current.next;
		}
		current.next = null;
	}
	public void printValues() {
		Node current = head;
		while(current != null) {
			System.out.println(current.value);
			current = current.next;
		}
	}
}