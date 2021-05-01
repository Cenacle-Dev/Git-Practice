# Git-Practice
Git 기본 사용법과 협업에 대해서 연습 해보자.

Git 라이프 사이클
---

![lifecycle](https://user-images.githubusercontent.com/24970070/114875251-13a6fc80-9e38-11eb-81a2-d94b5c25035e.png)

git이 설정된 작업 폴더의 모든 파일은 크게 Tracked(관리대상임)와 Untracked(관리대상이 아님)로 나눈다. 
  
Tracked(Git이 알고 있는) 파일은 이미 스냅샷에 포함돼 있던 파일이고, Unmodified(수정하지 않음)와 Modified(수정함) 그리고 Staged(커밋으로 저장소에 기록할) 상태 중 하나이다. 

그리고 나머지 파일은 모두 Untracked 파일이다. Untracked 파일은 워킹 디렉토리에 있는 파일 중 스냅샷에도 Staging Area에도 포함되지 않은 파일이다.
  
처음 저장소를 Clone 하면 모든 파일은 Tracked이면서 Unmodified 상태이다. 파일을 Checkout 하고 나서 아무것도 수정하지 않았기 때문에 그렇다.

마지막 커밋 이후 아직 아무것도 수정하지 않은 상태에서 어떤 파일을 수정하면 Git은 그 파일을 Modified 상태로 인식한다. 
  
실제로 커밋을 하기 위해서는 이 수정한 파일을 Staged 상태로 만들고, Staged 상태의 파일을 커밋한다. 이런 라이프사이클을 계속 반복한다.

> 대체 무슨말인지 잘 모르겠다.. 그냥 그렇구나 정도로 알아두고 사용하면서 알아가보자
  
> * 기본 사용방식:
> 현재 작업 폴더(local)와 원격저장소(remote)의 파일상태가 동일한 상태에서 작업 진행을 마무리 하고 원격저장소에 push 하려고할때
>   
> 명령어 git add (반영 파일 경로 또는 모든 파일은 .)로 반영 내용을 추가 하고
>   
> 명령어 git commit -m "커밋메시지" 로 반영 사항에 대한 내용을 작성 하고
>   
> 명령어 git push 로 원격 저장소에 반영한다.
>   
> 원격 저장소에 잘 반영이 되었는지 확인해본다 끝!

*출처: https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0

시나리오
---

1. 같은 프로젝트를 진행하고 있는 개발자들이 각 개인별 branch생성하여 작업 진행 중 작업이 완료되어 main branch에 merge(병합)하려고 한다.  
하지만 같은 코드내용을 여러명의 개발자가 작업 진행하여 merge 진행 중 conflict(충돌) 발생 하였다. 이를 해결해보자.

2. 팀장님께서 코드 리뷰 진행을 위해서 작업 내용 PR(Pull Request)을 보내달라고 한다. 어떻게 해야 할까?

> 이미 생성되어있는 원격 자장소 코드를 가져오기 위해 git clone 명령어를 사용해보자

도움이 되는 자료
---
https://backlog.com/git-tutorial/kr/

템플릿
---
```
# <type>: <subject>
##### Maximum length of subject is 50 ############## -> |
# content
######## Maximum length of content is 72 ########### -> |
# issue track number (#number)
# --- COMMIT END ---
# <type> list
#   feat    : New feature
#   fix     : Fix bug
#   refactor: Refactor code
#   style   : Change style of code(white space, semicolon etc)
#   test    : Add/Change/Delete test case
#   docs    : Add/Change/Delete document
#   build   : Change in build script
#   ci      : Change in ci script
#   chore   : etc
# ------------------
#     Capitalize the subject line
#     Use imperitive mood in subject
#     Do not use period at the end of subject
#     Seperate subject and content with a blank line
#     Use the body explain "what" and "why" vs "how"
#     Use "-" when content contains multiline
# ------------------
```
