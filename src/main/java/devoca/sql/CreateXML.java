package devoca.sql;

import java.io.FileOutputStream;
import java.util.Properties;
import java.util.Scanner;

public class CreateXML {
	public static void main(String[] args) {

		try {
			Scanner sc = new Scanner(System.in);

			System.out.print("생성할 XML 이름 입력 : ");

			String fileName = sc.nextLine();

			Properties prop = new Properties();

			String filePath = "src/main/java/edu/kh/community/sql/";

			prop.storeToXML(new FileOutputStream(filePath + fileName), fileName);

			System.out.println(fileName + "생성 성공");

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
