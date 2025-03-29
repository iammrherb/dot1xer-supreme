Vue.component('radius', {
    props: ['config'],
    template: \`
        <div>
            <h3>Step 4: RADIUS Servers</h3>
            <div class="help-section">
                <h5>Help</h5>
                <p>Configure RADIUS servers for authentication. You can add a secondary server and enable monitoring.</p>
            </div>
            <label class="form-label">RADIUS Type:</label>
            <select class="form-select" v-model="config.radius.type" @change="$emit('update:config', config)">
                <option value="1">Standard RADIUS</option>
                <option value="2">RADSEC (RADIUS over TLS)</option>
            </select>
            <label class="form-label">Primary RADIUS Server IP:</label>
            <input type="text" class="form-control" v-model="config.radius.primaryIp" placeholder="e.g., 192.168.1.10" @input="$emit('update:config', config)">
            <label class="form-label">Primary Auth Port:</label>
            <input type="text" class="form-control" v-model="config.radius.primaryAuthPort" placeholder="1812" @input="$emit('update:config', config)">
            <label class="form-label">Primary Acct Port:</label>
            <input type="text" class="form-control" v-model="config.radius.primaryAcctPort" placeholder="1813" @input="$emit('update:config', config)">
            <label class="form-label">Primary Shared Secret:</label>
            <input type="text" class="form-control" v-model="config.radius.primarySecret" placeholder="e.g., SecretKey" @input="$emit('update:config', config)">
            <label class="form-label">Enable Secondary Server:</label>
            <input type="checkbox" class="form-check-input" v-model="config.radius.secondary" @change="$emit('update:config', config)">
            <div v-if="config.radius.secondary">
                <label class="form-label">Secondary RADIUS Server IP:</label>
                <input type="text" class="form-control" v-model="config.radius.secondaryIp" placeholder="e.g., 192.168.1.11" @input="$emit('update:config', config)">
                <label class="form-label">Secondary Auth Port:</label>
                <input type="text" class="form-control" v-model="config.radius.secondaryAuthPort" placeholder="1812" @input="$emit('update:config', config)">
                <label class="form-label">Secondary Acct Port:</label>
                <input type="text" class="form-control" v-model="config.radius.secondaryAcctPort" placeholder="1813" @input="$emit('update:config', config)">
                <label class="form-label">Secondary Shared Secret:</label>
                <input type="text" class="form-control" v-model="config.radius.secondarySecret" placeholder="e.g., SecretKey2" @input="$emit('update:config', config)">
            </div>
            <label class="form-label">RADIUS Group Name:</label>
            <input type="text" class="form-control" v-model="config.radius.groupName" placeholder="e.g., RADIUS-SERVERS" @input="$emit('update:config', config)">
            <label class="form-label">Enable Monitoring:</label>
            <select class="form-select" v-model="config.radius.monitoring" @change="$emit('update:config', config)">
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
            <div v-if="config.radius.monitoring === '1'">
                <label class="form-label">Test Username:</label>
                <input type="text" class="form-control" v-model="config.radius.testUser" placeholder="e.g., probe" @input="$emit('update:config', config)">
                <label class="form-label">Idle Time (minutes):</label>
                <input type="number" class="form-control" v-model="config.radius.idleTime" placeholder="5" @input="$emit('update:config', config)">
            </div>
            <label class="form-label">Deadtime (minutes):</label>
            <input type="number" class="form-control" v-model="config.radius.deadtime" placeholder="15" @input="$emit('update:config', config)">
            <div class="step-navigation">
                <button @click="$parent.currentStep = 'aaa'">Previous</button>
                <button @click="$emit('next-step')" :disabled="!config.radius.primaryIp || !config.radius.primarySecret || !config.radius.groupName">Next</button>
            </div>
        </div>
    \`
});
