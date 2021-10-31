import * as SparkMD5 from "spark-md5";

export class Example {
    doHash() {
        return SparkMD5.hash('example');
    }
}