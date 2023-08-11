package devoca.member.model.vo;

public class Member {
	private int memberNo;
	private String memberId;
	private String memberPw;
	private String memberNick;
	private String snsFlag;
	private String enrollDate;
	private String secessionFlag;
	private String profileImage;

	public Member() {
		// TODO Auto-generated constructor stub
	}

	public Member(int memberNo, String memberId, String memberPw, String memberNick, String snsFlag, String enrollDate,
			String secessionFlag, String profileImage) {
		super();
		this.memberNo = memberNo;
		this.memberId = memberId;
		this.memberPw = memberPw;
		this.memberNick = memberNick;
		this.snsFlag = snsFlag;
		this.enrollDate = enrollDate;
		this.secessionFlag = secessionFlag;
		this.profileImage = profileImage;
	}

	public Member(String memberId, String memberPw, String memberNick, String profileImage) {
		super();
		this.memberId = memberId;
		this.memberPw = memberPw;
		this.memberNick = memberNick;
		this.profileImage = profileImage;
	}

	public int getMemberNo() {
		return memberNo;
	}

	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public String getMemberPw() {
		return memberPw;
	}

	public void setMemberPw(String memberPw) {
		this.memberPw = memberPw;
	}

	public String getMemberNick() {
		return memberNick;
	}

	public void setMemberNick(String memberNick) {
		this.memberNick = memberNick;
	}

	public String getSnsFlag() {
		return snsFlag;
	}

	public void setSnsFlag(String snsFlag) {
		this.snsFlag = snsFlag;
	}

	public String getEnrollDate() {
		return enrollDate;
	}

	public void setEnrollDate(String enrollDate) {
		this.enrollDate = enrollDate;
	}

	public String getSecessionFlag() {
		return secessionFlag;
	}

	public void setSecessionFlag(String secessionFlag) {
		this.secessionFlag = secessionFlag;
	}

	public String getProfileImage() {
		return profileImage;
	}

	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}

	@Override
	public String toString() {
		return "Member [memberNo=" + memberNo + ", memberId=" + memberId + ", memberPw=" + memberPw + ", memberNick="
				+ memberNick + ", snsFlag=" + snsFlag + ", enrollDate=" + enrollDate + ", secessionFlag="
				+ secessionFlag + ", profileImage=" + profileImage + "]";
	}

}
