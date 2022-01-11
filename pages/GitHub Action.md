- Support limited condition syntax
	- https://docs.github.com/en/actions/learn-github-actions/expressions#format
	- Ternary Operator
		- https://github.com/actions/runner/issues/409#issuecomment-752775072
		- e.g.:
		  ```yml
		  steps:
		    - name: stuff
		      env:
		        PR_NUMBER_OR_MASTER: ${{ github.event.number == 0 && 'master' ||  format('pr-{0}', github.event.number)  }}
		  ```