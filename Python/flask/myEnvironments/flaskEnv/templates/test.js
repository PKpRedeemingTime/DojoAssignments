function bracesValid(str) {
    var arr = [];
    for(var i = 0; i < str.length; i++) {
        if(str[i] == "{" || str[i] == "[" || str[i] == "(") {
            arr.push(str[i]);
        }
        else if(str[i] == "}" || str[i] == "]" || str[i] == ")") {
            if(str[i] == "}") {
                if(arr[arr.lenth-1] != "{") {
                    return false;
                }
                else {
                    arr.pop();
                }
            }
            else if(str[i] == "]") {
                if(arr[arr.lenth-1] != "[") {
                    return false;
                }
                else {
                    arr.pop();
                }
            }
            else if(str[i] == ")") {
                if(arr[arr.lenth-1] != "(") {
                    return false;
                }
                else {
                    arr.pop();
                }
            }
        }
    }
    if(arr == []) {
        return true;
    }
    else {
        return false;
    }
}