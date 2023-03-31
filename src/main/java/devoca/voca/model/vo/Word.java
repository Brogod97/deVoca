package devoca.voca.model.vo;


public class Word {
	private int wordNo;
	private int categoryNo;
	private String wordTitel;
	private String wordDf;
	private String wordMemo;
	private String codeBlock;
	private String createDate;
	private String checked;
	private String favorite;
	private String quizOx;
	private String language;
	
	
	public Word() {}


	public Word(int wordNo, int categoryNo, String wordTitel, String wordDf, String wordMemo, String codeBlock,
			String createDate, String checked, String favorite, String quizOx, String language) {
		super();
		this.wordNo = wordNo;
		this.categoryNo = categoryNo;
		this.wordTitel = wordTitel;
		this.wordDf = wordDf;
		this.wordMemo = wordMemo;
		this.codeBlock = codeBlock;
		this.createDate = createDate;
		this.checked = checked;
		this.favorite = favorite;
		this.quizOx = quizOx;
		this.language = language;
	}


	public int getWordNo() {
		return wordNo;
	}


	public void setWordNo(int wordNo) {
		this.wordNo = wordNo;
	}


	public int getCategoryNo() {
		return categoryNo;
	}


	public void setCategoryNo(int categoryNo) {
		this.categoryNo = categoryNo;
	}


	public String getWordTitel() {
		return wordTitel;
	}


	public void setWordTitel(String wordTitel) {
		this.wordTitel = wordTitel;
	}


	public String getWordDf() {
		return wordDf;
	}


	public void setWordDf(String wordDf) {
		this.wordDf = wordDf;
	}


	public String getWordMemo() {
		return wordMemo;
	}


	public void setWordMemo(String wordMemo) {
		this.wordMemo = wordMemo;
	}


	public String getCodeBlock() {
		return codeBlock;
	}


	public void setCodeBlock(String codeBlock) {
		this.codeBlock = codeBlock;
	}


	public String getCreateDate() {
		return createDate;
	}


	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}


	public String getChecked() {
		return checked;
	}


	public void setChecked(String checked) {
		this.checked = checked;
	}


	public String getFavorite() {
		return favorite;
	}


	public void setFavorite(String favorite) {
		this.favorite = favorite;
	}


	public String getQuizOx() {
		return quizOx;
	}


	public void setQuizOx(String quizOx) {
		this.quizOx = quizOx;
	}


	public String getLanguage() {
		return language;
	}


	public void setLanguage(String language) {
		this.language = language;
	}


	@Override
	public String toString() {
		return "Word [wordNo=" + wordNo + ", categoryNo=" + categoryNo + ", wordTitel=" + wordTitel + ", wordDf="
				+ wordDf + ", wordMemo=" + wordMemo + ", codeBlock=" + codeBlock + ", createDate=" + createDate
				+ ", checked=" + checked + ", favorite=" + favorite + ", quizOx=" + quizOx + ", language=" + language
				+ "]";
	}
	
	
}
