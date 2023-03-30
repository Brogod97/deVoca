package devoca.voca.model.vo;



public class Category {
	private int categoryNo;
	private int memberNo;
	private String categoryTitle;
	
	
	public Category() {}


	public Category(int categoryNo, int memberNo, String categoryTitle) {
		super();
		this.categoryNo = categoryNo;
		this.memberNo = memberNo;
		this.categoryTitle = categoryTitle;
	}


	public int getCategoryNo() {
		return categoryNo;
	}


	public void setCategoryNo(int categoryNo) {
		this.categoryNo = categoryNo;
	}


	public int getMemberNo() {
		return memberNo;
	}


	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}


	public String getCategoryTitle() {
		return categoryTitle;
	}


	public void setCategoryTitle(String categoryTitle) {
		this.categoryTitle = categoryTitle;
	}


	@Override
	public String toString() {
		return "Category [categoryNo=" + categoryNo + ", memberNo=" + memberNo + ", categoryTitle=" + categoryTitle
				+ "]";
	}
	
	
	
	
}


