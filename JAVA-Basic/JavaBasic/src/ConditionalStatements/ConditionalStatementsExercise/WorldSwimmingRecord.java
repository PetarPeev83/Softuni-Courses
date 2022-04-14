package ConditionalStatements.ConditionalStatementsExercise;

import java.util.Scanner;

public class WorldSwimmingRecord {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double record = Double.parseDouble(scan.nextLine());
        double distance = Double.parseDouble(scan.nextLine());
        double secondsPerMeter = Double.parseDouble(scan.nextLine());
        double slowingDown = Math.floor(distance / 15) * 12.5;

        double hisTime = distance * secondsPerMeter + slowingDown;

        double difference = Math.abs(record - hisTime);

        if (hisTime < record) {
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", hisTime);
        } else {
            System.out.printf("No, he failed! He was %.2f seconds slower.", difference);
        }
    }
}
